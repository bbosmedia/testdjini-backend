import { BadRequestException, Injectable } from '@nestjs/common';
import { BuildingDto } from './building.dto';
import { homeData, IHomeData } from './data';
import * as nodemailer from 'nodemailer'

@Injectable()
export class BuildingsService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getHouses(dto: BuildingDto): IHomeData[] {
    if (dto.type === '') {
      const homes = homeData.filter((home) =>
        home.title
          .toLocaleLowerCase()
          .includes(dto.searchTerm.toLocaleLowerCase()),
      );

      if (dto.sortby.toLocaleLowerCase() === 'date added') {
        return homes.sort((a, b) => a.date.getTime() - b.date.getTime());
      }
      if (dto.sortby.toLocaleLowerCase() === 'highest price') {
        return homes.sort((a, b) => b.cost - a.cost);
      }
      if (dto.sortby.toLocaleLowerCase() === 'lowest price') {
        return homes.sort((a, b) => a.cost - b.cost);
      }
    }

    const homes = homeData
      .filter((home) =>
        home.title
          .toLocaleLowerCase()
          .includes(dto.searchTerm.toLocaleLowerCase()),
      )
      .filter(
        (home) =>
          home.type.toLocaleLowerCase() === dto.type.toLocaleLowerCase(),
      );

    if (dto.sortby.toLocaleLowerCase() === 'date added') {
      return homes.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
    if (dto.sortby.toLocaleLowerCase() === 'highest price') {
      return homes.sort((a, b) => b.cost - a.cost);
    }
    if (dto.sortby.toLocaleLowerCase() === 'lowest price') {
      return homes.sort((a, b) => a.cost - b.cost);
    }
  }

      async sendEmail(html: string) {
        const transporter = nodemailer.createTransport({
          service: 'outlook',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
          }
        });

        const mailOptions = {
          from: process.env.EMAIL,
          to: 'bustha.rhymes19970410@gmail.com',
          subject: 'New Order!',
          text: 'Hi',
          html: html
        };
        return await transporter.sendMail(mailOptions)
    
  }
}
