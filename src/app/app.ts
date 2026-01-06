import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "./component/navbar/navbar";
import { Home } from "./component/home/home";
import { Gallary } from "./component/gallary/gallary";
import { Plans } from "./component/plans/plans";
import { Trainers } from "./component/trainers/trainers";
import { Contacts } from "./component/contacts/contacts";


interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, Navbar, Home, Gallary, Plans, Trainers, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gym');
  mobileMenuOpen = false;
  
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      text: 'Lorem ipsum dolor sit, amet consectetur'
    },
    {
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
      text: 'Lorem ipsum dolor sit, amet consectetur sit, amet'
    },
    {
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      text: 'Lorem ipsum dolor sit, amet consectetur'
    },
    {
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=300&fit=crop',
      text: 'Lorem ipsum dolor sit, amet consectetur adipiscing elit',
      wide: true
    },
    {
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop',
      text: 'Lorem ipsum dolor sit, amet consectetur elit'
    }
  ];

  plans = [
    {
      name: 'Silver',
      price: 30,
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit'
      ],
      featured: false
    },
    {
      name: 'Gold',
      price: 35,
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit'
      ],
      featured: true
    },
    {
      name: 'Platinum',
      price: 55,
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit'
      ],
      featured: false
    }
  ];

  trainers = [
    {
      name: 'Coach',
      description: 'Lorem ipsum dolor sit\nAmet consectetur\nElit sed do',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
      featured: true
    },
    {
      name: 'Trainer',
      description: 'Lorem ipsum dolor sit\nAmet consectetur\nElit sed do',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.mobileMenuOpen = false;
  }
}
