

export class LocationView {
  private location: string;
  hasTwoSpacesInUrl: boolean;

  canLoad({id}: { id: string }) {
    this.location = id;
  }

  loaded(){
    setTimeout(() => {
      this.hasTwoSpacesInUrl = window.location.href.match(/(%20| )/g).length > 1;
    }, 10);
  }

  get isProblematicLocation(): boolean {
    return this.location.indexOf(' ') > -1;
  }

  
}