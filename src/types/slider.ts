export interface SliderCardType {
  icon: string;
  title: string;
  sex: string;
  services: string[];
  currentPrice: number;
  previousPrice: number;
}

export interface SliderCardsType {
  sliderCards: SliderCardType[]
}