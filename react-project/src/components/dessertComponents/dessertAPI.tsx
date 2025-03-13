import axios from "axios"
import { API_URL } from "../../../config"
import { CreateDessert, Dessert } from "./DessertContextProvider"


export const fetchAllDesserts = async (): Promise<Dessert[]> => {
    try {
        const { data } = await axios(`${API_URL}/desserts`)
        return data
    } catch {
        throw new Error('Something went wrong...')
    }
}

export const fetchSingleDessert = async (id: string): Promise<Dessert> => {
    try {
        const { data } = await axios(`${API_URL}/desserts/${id}`)
        return data
    } catch {
        throw new Error('Something went wrong...')
    }
}

export const createDessert = async (newDessertData: CreateDessert): Promise<Dessert> => {
    try {
        const { data } = await axios.post(`${API_URL}/desserts`, newDessertData)
        return data
    } catch {
        throw new Error('Something went wrong...')
    }
}

export const updateDessert = async (updatedDessertData: Dessert): Promise<Dessert> => {
    try {
        const { data } = await axios.put(`${API_URL}/desserts/${updatedDessertData.id}`, updatedDessertData)
        return data
    } catch {
        throw new Error('Something went wrong...')
    }
}

export const deleteDessert = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/desserts/${id}`)
    } catch {
        throw new Error('Something went wrong...')
    }
}