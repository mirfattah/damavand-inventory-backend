import { Injectable } from '@nestjs/common';

@Injectable()
export class EquipmentService {
  private equipment: any[] = [
    {
      id: 157,
      name: 'hello',
    },

    {
      id: 22,
      name: 'bye',
    },
  ];

  findAll() {
    return this.equipment;
  }

  findOne(id: number) {
    return this.equipment.find((eq) => eq.id === id);
  }
}
