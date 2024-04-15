import { useState } from "react";
interface Car {
  name: string;
  color: string;
}
interface Winner {
  wins: number;
  time: number;
}
interface Engine {
  velocity: number;
  distance: number;
}

export const useCarState = () => {
  const urlWinner = "http://localhost:3000/winners";
  const urlGarage = "http://localhost:3000/garage";
  const urlEngine = "http://localhost:3000/engine";
  const [cars, setCars] = useState<Car[] | null>([]);
  const [winners, setWinners] = useState<Winner[] | null>([]);
  const [engine, setEngine] = useState<Engine[] | null>([]);

  // cars
  const fetchCars = async (page?: number, limit?: number) => {
    let url = urlGarage;
    if (page !== undefined || limit !== undefined) {
      url += `?`;
      if (page !== undefined) {
        url += `_page=${page}`;
      }
      if (limit !== undefined) {
        url += `${page !== undefined ? "&" : ""}_limit=${limit}`;
      }
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const fetchCarId = async (id: number) => {
    try {
      const response = await fetch(`${urlGarage}/${id}`);
      const data = await response.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const addCar = async (carName: string, carColor: string) => {
    try {
      const response = await fetch(urlGarage, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: carName, color: carColor }),
      });
    } catch (error) {
      console.error("error while adding car", error);
    }
  };
  const updateCar = async (
    id: number,
    updatedCar: { name: string; color: string }
  ) => {
    try {
      const response = await fetch(`${urlGarage}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCar),
      });
    } catch (error) {
      console.log(`error while update car`, error);
    }
  };
  const deleteCar = async (id: number) => {
    try {
      const response = await fetch(`${urlGarage}/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error while deleting car", error);
    }
  };
  //   winners
  const fetchWinner = async (
    page?: number,
    limit?: number,
    sort?: string,
    order?: string
  ) => {
    let url = urlWinner;
    if (
      page !== undefined ||
      limit !== undefined ||
      sort !== undefined ||
      order !== undefined
    ) {
      url += `?`;

      if (page !== undefined) {
        url += `_page=${page}`;
      }

      if (limit !== undefined) {
        url += `${page !== undefined ? "&" : ""}_limit=${limit}`;
      }

      if (sort !== undefined) {
        url += `${
          page !== undefined || limit !== undefined ? "&" : ""
        }_sort=${sort}`;
      }

      if (order !== undefined) {
        url += `${
          page !== undefined || limit !== undefined || sort !== undefined
            ? "&"
            : ""
        }_order=${order}`;
      }
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWinners(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const fetchWinnerId = async (id: number) => {
    try {
      const response = await fetch(`${urlWinner}/${id}`);
      const data = await response.json();
      setWinners(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const createWinner = async (wins: number, times: number) => {
    try {
      const response = await fetch(urlWinner, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wins: wins, times: times }),
      });
    } catch (error) {
      console.error(`error occured while creating winner ${error}`);
    }
  };

  const updateWinner = async (
    id: number,
    updatedWinner: { wins: string; times: string }
  ) => {
    try {
      const response = await fetch(`${urlWinner}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateWinner),
      });
    } catch (error) {
      console.error(`error occured while updating winner ${error}`);
    }
  };

  const deleteWinner = async (id: number) => {
    try {
      const response = await fetch(`${urlWinner}/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error while deleting winner", error);
    }
  };

  //   engine
  const getEngineMode = async (id: number, status: string) => {
    try {
      const response = await fetch(`${urlEngine}/?id=${id}&status=${status}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Failed to patch engine mode");
      }
      const responseData = await response.json();
      console.log(responseData);
      setEngine(responseData);
    } catch (error) {
      console.error("Error occurred while patching engine mode", error);
    }
  };
  const setEngineDriveMode = async (id: number, status: string) => {
    try {
      const response = await fetch(`${urlEngine}/?id=${id}&status=${status}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Failed to patch drive mode");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error occured while patching drive mode", error);
    }
  };

  return {
    cars,
    winners,
    engine,
    fetchCars,
    fetchCarId,
    addCar,
    updateCar,
    deleteCar,
    fetchWinner,
    fetchWinnerId,
    createWinner,
    updateWinner,
    deleteWinner,
    getEngineMode,
    setEngineDriveMode,
  };
};
