class ParkingLotSystem {
  capacity: number;
  numberOfAvailableParkingSpots: number;

  entrances: EntryTerminal[];
  exits: ExitTerminal[];
  parkingSpots: ParkingSpot[];
}

abstract class Terminal {
  id: number;
  paymentService: PaymentService;
  ticketService: TicketService;
}

class MinHeap<T> {
  private heap = [];
  constructor(array: T[]) { }
  peek() { }
  siftDown() { }
  siftUp() { }
  insert() { }
  delete() { }
}

class EntryTerminal extends Terminal {
  assignedLocations: MinHeap<ParkingSpotLocation>;

  constructor(locations: ParkingSpotLocation[]) {
    super();
    this.assignedLocations = new MinHeap(locations);
  }

  createTicket(parkingSpotType: ParkingSpotType) { return new ParkingTicket(); }
  assignParkingSpot(ticket: ParkingTicket) {
    // select closest spot based on supplied
    // list of assigned locations
    const id = 0;
    return id;
  }
}

class ExitTerminal extends Terminal {
  acceptTicket(ticket: ParkingTicket) { }
  releaseParkingSpot(id: number) { }
}

enum ParkingSpotType {
  SMALL,
  MEDIUM,
  LARGE
}

enum ParkingSpotStatus {
  TAKEN,
  AVAILABLE,
  RESERVED,
  CLOSED
}

class ParkingSpot {
  id: number;
  location: ParkingSpotLocation;
  type: ParkingSpotType;
  status: ParkingSpotStatus;
  vehicle?: ParkingSpotVehicle;
}

class ParkingSpotLocation {
  row: string;
  number: number;
}

enum VehicleSize {
  MOTORCYCLE,
  CAR,
  TRUCK
}

class ParkingSpotVehicle {
  licensePlate: string;
  size: VehicleSize;
}

class PaymentService {
  createTransaction(ticket: ParkingTicket) { return new Transaction(); }
  processTransaction(transaction: Transaction, paymentMethod: PaymentMethod) { return new Receipt(); }
}

abstract class PaymentMethod {
  name: string;
  billingDetails: BillingDetails;
}

class BillingDetails {
  address: string;
  email: string;
  name: string;
  phone: string
}

abstract class Cash extends PaymentMethod {
  name = 'Cash';
}

abstract class CreditCard extends PaymentMethod {
  name = 'Credit Card';

  number: number;
  expirationMonth: number;
  expirationYear: number;
  cvv: number;
}

class Transaction {
  id: number;
  amount: number;
  ticket: ParkingTicket;
  vehicle: ParkingSpotVehicle;
}

class Receipt {
  id: number;
  paymentMethod: PaymentMethod;
  transaction: Transaction;
}

class TicketService {
  createTicket() { return new ParkingTicket(); }
}

class ParkingTicket {
  id: number;
  parkingSpotId: number;
  parkingSpotType: ParkingSpotType;
  vehicle: ParkingSpotVehicle;
  issueTime: Date;
}

class TariffService {
  calculatePayment(time: number, spotType: ParkingSpotType) {
    let payment = 0;
    return 0;
  }
}

// Observer
class MonitorService {
  logger() { }
}
