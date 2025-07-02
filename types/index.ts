export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  thumbnail: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  category: string;
  lessons: Lesson[];
  requirements: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  resources?: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'file';
  url: string;
}

export interface LiveClass {
  id: string;
  title: string;
  instructor: string;
  startTime: string;
  endTime: string;
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  role: 'host' | 'participant';
  avatar?: string;
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseTitle: string;
  issueDate: string;
  expiryDate?: string;
  downloadUrl: string;
}