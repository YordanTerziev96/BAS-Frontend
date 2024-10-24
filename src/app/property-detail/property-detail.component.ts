import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyDetail: any;
  hotProperties: any[] = []; // Replace with the actual type

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    this.loadPropertyDetail(propertyId);
    this.loadHotProperties();
  }

  loadPropertyDetail(id: string | null) {
    if (id) {
      this.propertyService.getPropertyDetail(id).subscribe(data => {
        this.propertyDetail = data;
      });
    }
  }

  loadHotProperties() {
    this.propertyService.getHotProperties().subscribe(data => {
      this.hotProperties = data;
    });
  }

  onEnquirySubmit() {
    // Handle enquiry form submission
    // You can create an enquiry object and send it to your backend service
    console.log('Enquiry submitted!');
  }

  get safeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.propertyDetail?.locationMap);
  }
}
