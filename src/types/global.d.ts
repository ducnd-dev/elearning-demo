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


  declare type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    is_admin: number;
    plan_id: number;
    date_of_birth: string;
  };
  declare type Blog = {
      id: number;
      title: string;
      slug: string;
      content: string;
      image: string;
      views: number;
      likes: number;
      shares: number;
      user_id: number;
      is_published: number;
      deleted_at: string | null;
      created_at: string;
      updated_at: string;
      user: User;
  };

  declare type Setting = {
    id: number;
    bank_name: string;
    bank_account: string;
    bank_account_name: string;
    price: number;
    logo_header: string;
    logo_footer: string;
    email: string;
    phone: string;
    address: string;
    link_group_facebook: string;
    link_facebook: string;
    link_fanpage: string;
    link_youtube: string;
    created_at: string;
    updated_at: string;
  }

  declare type Event = {
    id: number;
    title: string;
    link: string;
  };
}

declare namespace API {
  declare type CourseMaterial = Model.CourseMaterial;
  declare type Course = Model.Course;
  declare type GetUser = {
    data: Model.User;
  };
  declare type GetCourseMaterialsResponse = {
    data: CourseMaterial[];
  };
  declare type GetCoursesResponse = {
    data: {
      courses: Course[];
    };
  };
  declare type GetCategory = {
    data: Course[];
  };

  declare type GetCourseMaterialResponse = {
    data: CourseMaterial;
  };
  declare type GetSettingResponse = {
    data: Model.Setting;
  };
  declare type Login = {
    data: {
      access_token: string;
      user: User;
    };
  };
  declare type CreateOrderResponse = {
    data: {
      id: number;
      user_id: number;
      order_code: string;
    };
  };
  declare type CheckOrderStatusResponse = {
    data: {
      isPaid: boolean;
    };
  };

  declare type GetBlogsResponse = {
    data: {
      data: Model.Blog[];
      current_page: number;
      total: number
    };
  };

  declare type GetBlogResponse = {
    data: Model.Blog;
  };

  declare type GetSettingsResponse = {
    data: Model.Setting;
  };

  declare type Events = {
    data: Model.Event[];
  };
}
