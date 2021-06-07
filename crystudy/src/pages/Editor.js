import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../scss/pages/_Editor.scss';
import "../scss/pages/_StudyDataBar.scss";
import '../scss/pages/_StudyManage.scss';

class Editor extends Component {
    
    render() {
        return (
            <>
            <div className='editorDiv'>
                <h2>글쓰기</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>스터디 관련 게시물을 작성해보세요.</p><br/><br/><br/><br/>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                />
            </div>
            </>
        );
    }
}

export default Editor;