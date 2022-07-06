export type RaceChartData = Frame<number>[];

export interface Frame<T> {
    name: string;
    frameData: FrameData<T>[];
}

export interface FrameData<T> {
    name: string;
    value: T;
}
