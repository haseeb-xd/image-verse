import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'imagegenerator',
  templateUrl: './imagegenerator.html',
  styleUrls: ['./imagegenerator.css']

})
export class ImageGeneratorComponent {
  title = 'image-verse';
  isLoading = false;

  constructor(private sanitizer: DomSanitizer) { }

  searchText: any = "";
  searchResult: any = "";
  searchTextRequest: any = "";
  IsError: boolean = false;
  API_KEY: string = "YOUR_HUGGING_FACE_API_KEY"
  myImage = document.querySelector('img');


  search() {
    console.log(this.searchText);
    this.isLoading = true;
    if (this.searchText == "") {
      this.searchTextRequest = "https://i.imgur.com/7yPHn.jpg";
    }

    else {
      this.searchTextRequest = this.searchText;
    }

    this.generateImage();
  }

  onChange(newValue: any) {
    this.searchText = newValue;
  }

  downloadImage() {
    const link = document.createElement('a');
    link.href = this.searchResult;
    link.download = 'image.jpg';
    link.click();
  }

  generateImage = async () => {
    const options = {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + this.API_KEY
      },
      body: JSON.stringify(this.searchTextRequest)
    }

    try {
      const response = await fetch('https://api-inference.huggingface.co/models/prompthero/openjourney-v4', options)
      const data = await response.blob();
      this.searchResult = URL.createObjectURL(data);
      console.log(this.searchResult);
      this.isLoading = false;
    }
    catch (err) {
      this.isLoading = false;
      console.log(err);
      this.IsError = true;
      setTimeout(() => {
        this.IsError = false;
      }
        , 3000);
    }
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}







