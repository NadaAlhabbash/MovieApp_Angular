<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

=======
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
>>>>>>> 0804336fa7674a0334a4378cc35271366ff21297

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
<<<<<<< HEAD
export class SliderComponent implements OnInit {
    topRated : Movie[] = [];
=======
export class SliderComponent {

  sliderPhotos: any[] = [
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
  ]
>>>>>>> 0804336fa7674a0334a4378cc35271366ff21297

  // items: string[] = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

<<<<<<< HEAD
  ngOnInit(): void {
    this.top5Movies();
  }

    top5Movies() {
    this.moviesService.getTopRatedMovies().subscribe({
      next: (response) => { // Changed 'movies' to 'response'
        this.topRated = response.slice(0, 5); // Access 'results' property of the response
        // console.log(this.topRated);        
      }
    });
  }
=======
  // slickConfig = {
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   dots: false,
  //   infinite: false,
  //   swipeToSlide: true
  // };
>>>>>>> 0804336fa7674a0334a4378cc35271366ff21297

  // afterChange(e: any) {
  //   console.log('afterChange', e);
  // }

  @ViewChild('slider') sliderContainer!: ElementRef;
    @ViewChild('track') sliderTrack!: ElementRef;

    // slides = [
    //     { imageUrl: 'https://example.com/slide1.jpg' },
    //     { imageUrl: 'https://example.com/slide2.jpg' },
    //     { imageUrl: 'https://example.com/slide3.jpg' },
    //     // Add more slides as needed
    // ];

    startX = 0;
    startScrollX = 0;
    dragging = false;

    onDragStart(event: MouseEvent | TouchEvent) {
        this.dragging = true;
        this.startX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
        this.startScrollX = this.sliderContainer.nativeElement.scrollLeft;
    }

    @HostListener('mousemove', ['$event'])
    @HostListener('touchmove', ['$event'])
    onDragMove(event: MouseEvent | TouchEvent) {
        if (!this.dragging) {
            return;
        }
        const currentX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
        const deltaX = this.startX - currentX;
        this.sliderContainer.nativeElement.scrollLeft = this.startScrollX + deltaX;
        event.preventDefault();
    }

    @HostListener('mouseup')
    @HostListener('touchend')
    onDragEnd() {
        this.dragging = false;
    }
}
