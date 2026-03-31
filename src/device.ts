export class Device {
  private device: string;

  canLoad({id}: { id: string }) {
    this.device = id;
  }

  get isProblematicDevice(): boolean {
    return this.device.indexOf(' ') > -1;
  }
}