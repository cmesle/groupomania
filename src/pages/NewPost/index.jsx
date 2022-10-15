import '../../styles/App.css';
import PostForm from '../../components/PostForm';


function NewPost() {
    return <PostForm
        titleToDisplay='Nouvelle publication'
        imageInputName='ajouter une image'
        buttonName='publier'
        navigateTo='../../gallery' />
}

export default NewPost
