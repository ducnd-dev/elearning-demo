// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');

// eslint-disable-next-line
declare interface IntlMessages extends Messages {}

declare namespace Model {
  declare type CourseMaterial = {
    id: number;
    course_id: number;
    title: string;
    file_path: string | null;
    is_free: number;
    is_important: number;
    is_featured: number;
    description: string | null;
    time: string;
    img: string;
    created_at: string;
    updated_at: string;
  };

  declare type Course = {
    id: number;
    title: string;
    course_materials: CourseMaterial[];
  };

}

declare namespace API {
  declare type CourseMaterial = Model.CourseMaterial;
  declare type Course = Model.Course;
  declare type GetCourseMaterialsResponse = {
    data: CourseMaterial[];
  };
  declare type GetCoursesResponse = {
    data: Course[];
  };
  declare type GetCourseMaterialResponse = {
    data: CourseMaterial;
  };
}
