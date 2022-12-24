import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
     projectId: "d84h8ak7", // find this at manage.sanity.io or in your sanity.json
     dataset: "production", // this is from those question during 'sanity init'
     useCdn: true,
     token: 'skoGu7lHGFeH18PliW3PWBNcEc69p5khJQHudothqJm2csBDJPwHgZJQ8CTxCEHiBwS5JirNehtmHCvz76pd6OTRRklZxsUjOUob54FlSnaqFE36yFWN1B5LTi2x0kxW1kJKjA6DMdY2InuJG3PwVusFw9lvOi8cYlC22OYQ3oA8vOPSgh4i'
});
