import { useState } from "react";
interface Car {
  name: string;
  color: string;
}
export const [cars, setCars] = useState<Car[] | null>([]);
const urlGarage = "http://localhost:3000/garage";
// cars
export const fetchCars = async (page?: number, limit?: number) => {
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

export const fetchCarId = async (id: number) => {
  try {
    const response = await fetch(`${urlGarage}/${id}`);
    const data = await response.json();
    console.log(data);
    setCars(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const addCar = async (carName: string, carColor: string) => {
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
export const updateCar = async (
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
export const deleteCar = async (id: number) => {
  try {
    const response = await fetch(`${urlGarage}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error while deleting car", error);
  }
};
