export type Maybe<T> = T | null;

export type Icon = {
    key: string;
    value: string;
}

export type Owner = {
    name: string;
}

export type Category = {
    value: string;
}

export type TaskType = {
    _id: string;
    title: string;
    key: string;
    subtasks: string[];
    parent?: string;
}

export type BoardType = {
    _id: string;
    title: string;
    key: string;
    icon?: Icon;
    owner: Owner;
    category: Category;
    tasks: TaskType[];
}