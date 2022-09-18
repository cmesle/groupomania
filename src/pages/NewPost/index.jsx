import '../../styles/App.css';

function NewPost() {
    return (
        <main>
            <div className="">
                Nouvelle publication
            </div>
            <form>
                <div class="form-group">
                    <label for="postSubject">Titre du post</label>
                    <input type="text" class="form-control" id="postSubject" formControlName="postSubject" />
                </div>
                <div class="form-group">
                    <label for="postText">Description</label>
                    <textarea class="form-control" id="postText" rows="5" formControlName="postText"></textarea>
                </div>
                <div class="form-group">
                    <input type="file" accept="image/*" />
                    <button mat-raised-button color="primary" >ADD IMAGE</button>
                    <img src="" style={{ maxHeight: '100px', display: 'block', marginTop: '10px' }} />
                </div>

                <button>SUBMIT</button>
            </form>

        </main>
    )
}

export default NewPost
