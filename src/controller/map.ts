import ServerGlobal from "../server-global";

import { countriesData } from '../model/shared/countriesData';

import {
  IGetCountriesRequest,
} from "../model/express/request/map";
import {
  IGetCountriesDataResponse,
} from "../model/express/response/map";

const getCountriesData = async (req: IGetCountriesRequest, res: IGetCountriesDataResponse) => {
  ServerGlobal.getInstance().logger.info(`<getCountriesData>: Start processing request`);

  try {
    // Checks countries data
    if (!countriesData) {
      ServerGlobal.getInstance().logger.error('<getCountriesData>: Failed to get countries data');

      res.status(400).send({
        success: false,
        message: "Failed to get countries data",
      });
      return;
    }

    ServerGlobal.getInstance().logger.info(
      '<getCountriesData>: Successfully got countries data'
    );

    res.status(200).send({
      success: true,
      message: "Successfully retrieved countries data",
      data: countriesData.map((countryData) => ({
        location: countryData.location,
        company1: countryData.company1,
        company2: countryData.company2,
        company3: countryData.company3,
      })),
    });
    return;
  } catch (e) {
    ServerGlobal.getInstance().logger.error(
      `<getCountriesData>: Failed to get countries data because of server error: ${e}`
    );

    res.status(500).send({
      success: false,
      message: "Server error",
    });
    return;
  }
};

export { getCountriesData };