import React from 'react'

class ImageUploader extends React.Component {
    constructor(props) {
       super(props);
       this.handleAddImage = this.handleAddImage.bind(this);
       this.handleUploadImage = this.handleUploadImage.bind(this);
       this.handleDragOver = this.handleDragOver.bind(this);
       this.handleDragEnter = this.handleDragEnter.bind(this);
       this.handleDragLeave = this.handleDragLeave.bind(this);
       this.handleDrop = this.handleDrop.bind(this);
       this.handleCancelUpload = this.handleCancelUpload.bind(this);
       this.state = {
          file: null,
          dragOver: false,
          errorNoficication: null,
          image: this.props.image
       };
    }
    
    /* Drag & Drop Event Handlers */
    handleDragEnter(e) {
       e.preventDefault();
    }

    handleDragOver(e) {
       e.preventDefault();
       if (!this.state.dragOver) {
          this.setState({
             dragOver: true
          });
       }
    }
    handleDragLeave(e) {
       e.preventDefault();
       this.setState({
          dragOver: false
       });
    }
    handleDrop(e) {
       e.preventDefault();
       let file = e.dataTransfer.files[0];
       
       // Validação: ficheiro é do tipo 'imagem'?
       let fileType = file.type.split("/")[0];
       if (fileType !== "image") {
          this.setState({
             file: null,
             errorNotification: "Não é um ficheiro de imagem",
             dragOver: false
          });
          return setTimeout(() => {
             this.setState({
                errorNotification: null
             });
          }, 3000);
       }
       document.getElementById('upload-image-input').fileList =  e.dataTransfer.files[0];
       this.setState({
          file,
          dragOver: false
       });
    }
    
    
    /* Handle ficheiros adicionados manualmente (input) */
    handleAddImage(e) {
       e.preventDefault();
       let file = this.image.files[0];
       
       // Validação se é do tipo 'imagem'
       let fileType = this.image.files[0].type.split('/')[0];
       if (fileType !== "image") {
          console.log("Não é um ficheiro de imagem");
          this.setState({
             file: null,
             errorNotification: "Não é um ficheiro de imagem",
             dragOverClass: ""
          });
          return setTimeout(() => {
             this.setState({
                errorNotification: null
             });
          }, 3000);
       }

       this.props.onChange(file)
       this.setState({
          file
       });
    }
    
    /*  Handle Upload depois do botão ser clicado */
    handleUploadImage(e) {
       e.preventDefault();
       if (this.image.files[0]) {
          console.log("Uploading Image " + this.image.files[0].name + "");
          /* Upload da imagem*/
       }
    }
    handleCancelUpload (e) {
       e.preventDefault();
       this.setState({
          file: null
       });
    }
    
    
    render() {
       
       // Combinar o drag over com o CSS
       let dragOverClass = this.state.dragOver
          ? `display-box drag-over`
          : `display-box`;
       
       // If file is set, change upload box text to file name
       let uploadText = this.state.file
          ? <div className="paragraph">{this.state.file.name}</div>
            
          : <p className="legend-text">Arraste o ficheiro ou <b>clique aqui</b> para fazer upload</p>
            
       
       // Mostrar erro se não é uma imagem
       let errorNotification = this.state.errorNotification
          ? <div className="error-notification">
               <p>{this.state.errorNotification}</p>
            </div>
          : null;
       
       
       return (
          <div className="image-uploader-wrapper">
             <div className={dragOverClass}>
                <div className="icon-text-box">
                   <div className="upload-icon">
                   <svg id="Icon_upload_solid" xmlns="http://www.w3.org/2000/svg" width="57.011" height="33.736" viewBox="0 0 57.011 33.736">
                        <path id="Path" d="M45.609,14.458c6.3,0,11.4,4.316,11.4,9.639s-5.105,9.639-11.4,9.639H31.356V22.685l.835.706a3.231,3.231,0,0,0,4.031,0,2.156,2.156,0,0,0,0-3.408l-5.7-4.819a3.127,3.127,0,0,0-2.016-.706h-.072a3.29,3.29,0,0,0-1.019.182,2.924,2.924,0,0,0-.924.523l-5.7,4.819a2.156,2.156,0,0,0,0,3.408,3.231,3.231,0,0,0,4.031,0l.835-.706v11.05h-11.4C6.381,33.736,0,28.341,0,21.687c0-6.1,5.368-11.146,12.331-11.94C14.642,4.075,21.011,0,28.506,0,37.952,0,45.609,6.473,45.609,14.458Z" fill="#329d9c"/>
                    </svg>

                   </div>
                   <div className="upload-text">
                      {uploadText}
                   </div>
                   {errorNotification}
                </div>
                
                <input
                      type="file"
                      ref={(img) => this.image = img}
                      id="upload-image-input"
                      className="upload-image-input"
                      accept="image/*"
                      onDrop={this.handleDrop}
                      onDragEnter={this.handleDragEnter}
                      onDragOver={this.handleDragOver}
                      onDragLeave={this.handleDragLeave}
                      onChange={this.handleAddImage}
                   />
                <div>
                </div>
             </div>
          </div>
       );
    }
 }

 export default ImageUploader