export type Photo = {
  id: string;
  title: string;
  date: string;
  href?: string; // Added '?' to indicate optional
  // username: string;
  // imageSrc: string;
  img: string;
  description: string;
  details: {
    telescope: string;
    mount: string;
    filters: string;
    integration: string; // Adjusted type based on actual data
    remarks: string;
    location: string;
    software: string
  };
};
  
  const photos: Photo[] = [
    {
      "id" : "NGC6888",
      "title" : "NGC6888",
      "date" : "1-7-2021",
      "img" : "NGC6888.JPG",
      "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      "details" : {
        "telescope" : "Skywatcher Esprit 100",
        "mount" : "Skywatcher EQ6r-Pro",
        "filters" : "Optolong L-enhance",
        "integration" : "?",
        "remarks" : "maybe some more text",
        "software" : "maybe some more text",
        "location": "Erkrath"
      }
    },
    {
      "id" : "Cirrus",
      "title" : "Cirrus Nebel",
      "date" : "1-7-2021",
      "img" : "cirrus.jpg",
      "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      "details" : {
        "telescope" : "Skywatcher Esprit 100",
        "mount" : "Skywatcher EQ6r-Pro",
        "filters" : "Optolong L-enhance",
        "integration" : "?",
        "remarks" : "maybe some more text",
        "software" : "maybe some more text",
        "location": "Erkrath"
      }  },
    {
      "id" : "NGC869",
      "title" : "X & Chi Per",
      "date" : "1-7-2021",
      "img" : "HChi.jpg",
      "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      "details" : {
        "telescope" : "Skywatcher Esprit 100",
        "mount" : "Skywatcher EQ6r-Pro",
        "filters" : "Optolong L-enhance",
        "integration" : "?",
        "remarks" : "maybe some more text",
        "software" : "maybe some more text",
        "location": "Erkrath"
      }  },
    {
      "id" : "Cocoon",
      "title" : "Cocoon Nebel",
      "date" : "1-7-2021",
      "img" : "cocoon.jpg",
      "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      "details" : {
        "telescope" : "Skywatcher Esprit 100",
        "mount" : "Skywatcher EQ6r-Pro",
        "filters" : "Optolong L-enhance",
        "integration" : "?",
        "remarks" : "maybe some more text",
        "software" : "maybe some more text",
        "location": "Erkrath"
      }  },
    {
      "id" : "IC434",
      "title" : "IC434",
      "date" : "1-7-2021",
      "img" : "IC434.jpg",
      "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
      "details" : {
        "telescope" : "Skywatcher Esprit 100",
        "mount" : "Skywatcher EQ6r-Pro",
        "filters" : "Optolong L-enhance",
        "integration" : "?",
        "remarks" : "maybe some more text",
        "software" : "Kstars/Ekos, PHD-Guiding, Pixinsight",
        "location": "Erkrath"
      }  },
      {
        "id" : "IC5070",
        "title" : "IC5070",
        "date" : "1-7-2021",
        "img" : "IC5070.jpg",
        "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
        "details" : {
          "telescope" : "Skywatcher Esprit 100",
          "mount" : "Skywatcher EQ6r-Pro",
          "filters" : "Optolong L-enhance",
          "integration" : "?",
          "remarks" : "maybe some more text",
          "software" : "Kstars/Ekos, PHD-Guiding, Pixinsight",
          "location": "Erkrath"
        }  },
        {
          "id" : "LBN581",
          "title" : "LBN581",
          "date" : "1-7-2021",
          "img" : "LBN581.jpg",
          "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
          "details" : {
            "telescope" : "Skywatcher Esprit 100",
            "mount" : "Skywatcher EQ6r-Pro",
            "filters" : "Optolong L-enhance",
            "integration" : "?",
            "remarks" : "maybe some more text",
            "software" : "Kstars/Ekos, PHD-Guiding, Pixinsight",
            "location": "Erkrath"
          }  },
          {
            "id" : "LeoTriplet",
            "title" : "Leo Triplet",
            "date" : "1-7-2021",
            "img" : "LeoTriplet.jpg",
            "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
            "details" : {
              "telescope" : "Skywatcher Esprit 100",
              "mount" : "Skywatcher EQ6r-Pro",
              "filters" : "Optolong L-enhance",
              "integration" : "?",
              "remarks" : "maybe some more text",
              "software" : "Kstars/Ekos, PHD-Guiding, Pixinsight",
              "location": "Erkrath"
            }  },
            {
              "id" : "NGC7635",
              "title" : "NGc7635",
              "date" : "1-7-2021",
              "img" : "NGC7635.jpg",
              "description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
              "details" : {
                "telescope" : "Skywatcher Esprit 100",
                "mount" : "Skywatcher EQ6r-Pro",
                "filters" : "Optolong L-enhance",
                "integration" : "?",
                "remarks" : "maybe some more text",
                "software" : "Kstars/Ekos, PHD-Guiding, Pixinsight",
                "location": "Erkrath"
              }  }
  ]
  
  export default photos