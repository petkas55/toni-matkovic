export interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  features: string[];
  primary?: boolean;
}

export interface Transformation {
  name: string;
  duration: string;
  description: string;
  images: {
    front: string;
    side: string;
    back: string;
  };
}