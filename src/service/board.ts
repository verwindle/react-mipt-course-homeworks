import {BoardType} from "../types/types";

export const getBoards = (): Promise<BoardType[]> => {
    return fetch("/api/board")
        .then(response => response.json())
}

export const getBoard = (id: string) => (): Promise<BoardType> => {
    return fetch(`/api/board/${id}`)
        .then(response => response.json())
}