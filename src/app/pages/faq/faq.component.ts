import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [
    trigger('collapse', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0', opacity: 0 })),
      transition('expanded <=> collapsed', animate('300ms ease-out')),
    ]),
  ],
})
export class FAQComponent {
  faqList = [
    {
      question: "¿Qué significa el término \"salvaescaleras\"?",
      answer: "Un salvaescaleras se define como un sistema mecánico de transporte vertical diseñado para facilitar el desplazamiento entre los distintos niveles de una escalera, especialmente concebido para personas con movilidad reducida. Este sistema puede manifestarse a través de sillas salvaescaleras, plataformas salvaescaleras o elevadores verticales.",
      open: false
    },
    {
      question: "¿Cuáles son las ventajas clave asociadas con la instalación de una silla salvaescaleras?",
      answer: "Las sillas salvaescaleras ofrecen notables beneficios al proporcionar a las personas con movilidad reducida una mayor autonomía y seguridad al subir y bajar escaleras de manera cómoda y segura. Además, su facilidad de uso mediante un simple botón, la no obstrucción del paso en la escalera y la capacidad de personalización para integrarse en cualquier entorno doméstico son aspectos destacados.",
      open: false
    },
    {
      question: "¿Es necesario contar con un espacio considerable para instalar un salvaescaleras?",
      answer: "En realidad, la mayoría de los salvaescaleras están diseñados para maximizar el aprovechamiento del espacio disponible en la escalera, sin causar obstrucciones significativas. Los raíles y estructuras asociadas suelen ser discretos y no intrusivos.",
      open: false
    },
    {
      question: "Si mi escalera presenta una curva, ¿es posible instalar una silla salvaescaleras?",
      answer: "Sí, existen modelos de sillas salvaescaleras diseñados específicamente para adaptarse a escaleras con tramos curvos. Estas variantes pueden ajustarse a giros y cambios de pendiente, garantizando siempre la seguridad y comodidad óptimas para el usuario.",
      open: false
    },
    {
      question: "¿Los salvaescaleras continúan funcionando en caso de un corte eléctrico?",
      answer: "Sí, los modelos modernos de salvaescaleras están equipados con baterías que permiten su funcionamiento durante un período incluso si se produce una interrupción eléctrica. Esto asegura la finalización segura del trayecto iniciado.",
      open: false
    },
    {
      question: "Si tengo una terraza exterior, ¿puedo instalar una plataforma salvaescaleras allí?",
      answer: "Absolutamente, existen modelos de plataformas salvaescaleras diseñados específicamente para instalaciones en exteriores. Estas plataformas están fabricadas con materiales resistentes a las inclemencias del tiempo.",
      open: false
    },
    {
      question: "¿Cuáles son las ventajas de las plataformas salvaescaleras en comparación con las sillas?",
      answer: "Las plataformas salvaescaleras ofrecen ventajas significativas al permitir el acceso directo en silla de ruedas, contar con una mayor superficie y capacidad de carga, y proporcionar un espacio más abierto. Además, su acceso frontal resulta más cómodo.",
      open: false
    },
    {
      question: "Si mi escalera es recta, ¿cuál es el modelo de plataforma salvaescaleras más recomendable?",
      answer: "Para escaleras rectas sin curvas, se recomiendan las plataformas salvaescaleras de tipo recto. Estas plataformas, cuya estructura vertical se desplaza por un solo raíl adosado a la pared, requieren menos espacio de instalación.",
      open: false
    },
    {
      question: "¿Son seguras las plataformas salvaescaleras? ¿Incorporan sistemas de seguridad?",
      answer: "Las plataformas salvaescaleras cumplen con los más altos estándares de seguridad al contar con diversos sistemas, como anti-impacto, anti-aplastamiento y paradas de emergencia. Además, están equipadas con brazos de protección y dispositivos que detienen el movimiento al detectar obstáculos.",
      open: false
    }
  ];

  toggleAnswer(question: any) {
    question.open = !question.open;
  }
}
