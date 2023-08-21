import { Component } from '@angular/core';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCircleCheck, faClock, faCreditCard, faDesktop, faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  faDesktop = faDesktop;
  faApple = faApple;
  faLaptop = faLaptop;
  faCircleCheck = faCircleCheck;

  iconBox = [
    {
      name: "Calidad",
      icon: faCircleCheck,
      description: "Te garantizamos la calidad de todos nuestros productos."
    },
    {
      name: "Envío express",
      icon: faClock,
      description: "Enviamos tu pedido entre 4 y 7 dias hábiles."
    },
    {
      name: "Meses sin intereses",
      icon: faCreditCard,
      description: "Pagos a 3, 6, 9 y 12 meses sin intereses."
    }
  ]
}
