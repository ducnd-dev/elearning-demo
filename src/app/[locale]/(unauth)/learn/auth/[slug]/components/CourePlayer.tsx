import React from 'react';

type Props = {
  data: {
    course_materials: API.CourseMaterial[];
  };
};
const CourePlayer = (props: Props) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 aspect-video h-[60vh] w-full">
        <video controls className="aspect-video w-full">
          <track
            kind="captions"
            srcLang="en"
            src="/path/to/captions.vtt"
            label="English"
            default
          />
        
          Your browser does not support the video tag.
        </video>
      </div>
      <div>

      </div>
    </div>
  );
};

export default CourePlayer;
