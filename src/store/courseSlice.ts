import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFeaturedCourses, getCourseDetails, enrollCourse } from '../services/course';

interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
}

interface CourseState {
  featuredCourses: Course[];
  currentCourse: Course | null;
  enrolledCourses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  featuredCourses: [],
  currentCourse: null,
  enrolledCourses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    clearCourseError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFeaturedCourses.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFeaturedCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.featuredCourses = action.payload;
      })
      .addCase(getFeaturedCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load featured courses';
      })
      .addCase(getCourseDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourseDetails.fulfilled, (state, action: PayloadAction<Course>) => {
        state.loading = false;
        state.currentCourse = action.payload;
      })
      .addCase(getCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load course details';
      })
      .addCase(enrollCourse.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(enrollCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        state.loading = false;
        state.enrolledCourses.push(action.payload);
      })
      .addCase(enrollCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to enroll in course';
      });
  },
});

export const { clearCourseError } = courseSlice.actions;
export default courseSlice.reducer;