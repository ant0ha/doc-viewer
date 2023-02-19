import { Component, Input } from '@angular/core';
import { Annotation } from 'src/app/viewer/annotations/annotation';

@Component({
  selector: 'app-annotation-image-add',
  templateUrl: './annotation-image-add.component.html',
  styleUrls: ['./annotation-image-add.component.css']
})
export class AnnotationImageAddComponent {

  @Input() annotation: Annotation;

  async uploadImage(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
      try {
        const base64: string = await this.fileToBase64(target.files[0]);

        this.annotation.content = base64;
        this.annotation.completed = true;
      } catch (e) {
        console.error(e);
      }
    }
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}
