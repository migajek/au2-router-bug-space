export class LocationView {
  private location: string;

  canLoad({id}: { id: string }) {
    this.location = id;
  }

  get isProblematicLocation(): boolean {
    return this.location.indexOf(' ') > -1;
  }
}