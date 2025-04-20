declare interface AnimeParams {
  targets: any;
  translateY?: number[];
  opacity?: number[];
  duration?: number;
  delay?: number;
  easing?: string;
}

declare interface AnimeInstance {
  play: () => void;
  pause: () => void;
  restart: () => void;
  reverse: () => void;
  seek: (time: number) => void;
  finished: Promise<void>;
}

declare function anime(params: AnimeParams): AnimeInstance;

declare global {
  interface Window {
    anime: typeof anime;
  }
} 