import React from 'react';

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  modules: number;
  duration: string;
  price?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}