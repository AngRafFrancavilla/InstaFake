import { View, Image, Alert } from 'react-native'; // Import Alert
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import MyButton from "../components/Button";
import { useSessionContext } from '../context';
import Input from "../components/Input";

const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
};

const imageContainerStyle = {
    width: 400,
    height: 400,
    backgroundColor: 'red',
};

function Create() {
    const [img, setImg] = useState(null);
    const [description, setDescription] = useState('');
    const value = useSessionContext();

    async function openCamera() {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Dammi i permessi');
            return;
        }
        console.log('Abbiamo i permessi.');

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) { // Check if the user didn't cancel
            const image = result.assets[0].uri;
            setImg(image);
        }
    }

    function deleteImage() {
        setImg(null);
    }

    function publishPost() {
        if (!img || !description) { // Ensure there is an image and description
            Alert.alert("Errore", "Assicurati di avere un'immagine e una descrizione!");
            return;
        }

        const post = {
            name: 'Raffaele Francavilla',
            image: img,
            description: description,
            profileImage: 'https://media.licdn.com/dms/image/v2/D5635AQETPwGdbiD6sw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727708984345?e=1729688400&v=beta&t=N3L3_aCNLUpvhX59rdT4drK9s9hgcrdujrKHzCw1sTw',
        };

        value.addPosts(post);
        deleteImage();
        Alert.alert("Post Creato", "Post creato correttamente!"); // Alert after publishing
    }

    return (
        <View style={containerStyle}>
            {!img && <MyButton
                title={"APRI FOTOCAMERA"}
                onPress={openCamera}
            />}

            {!!img && <View>
                <View style={imageContainerStyle}>
                    <Image
                        source={{ uri: img }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                <MyButton
                    title="Elimina"
                    onPress={deleteImage}
                />

                <Input
                    placeholder="Descrizione"
                    onChange={setDescription}
                />

                <MyButton
                    title={"Pubblica"}
                    onPress={publishPost}
                />
            </View>}
        </View>
    );
}

export default Create;
