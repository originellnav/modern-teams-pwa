// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Documents
import page from "./documents/page";
import routing from "./documents/routing";
import company from "./documents/company";
import benefit from "./documents/benefit";

// Objects
import blockContent from "./objects/blockContent";
import dropdownChildNavItem from "./objects/dropdownChildNavItem";
import dropdownNavItem from "./objects/dropdownNavItem";
import singletonNavItem from "./objects/singletonNavItem";
import footerNavItem from "./objects/footerNavItem";
import footerNav from "./objects/footerNav";
import socialMediaItem from "./objects/socialMediaItem";
import mainImage from "./objects/mainImage";
import socialMedia from "./objects/socialMedia";
import companyWebsite from "./objects/companyWebsite";
import formField from "./objects/formField";

// Sections
import introSection from "./sections/introSection";
import portableText from "./sections/portableText";
import directoryGrid from "./sections/directoryGrid";
import featuredTeams from "./sections/featuredTeams";
import benefitList from "./sections/benefitList";
import contactForm from "./sections/contactForm";
import emailListCta from "./sections/emailListCta";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    blockContent,
    introSection,
    routing,
    dropdownChildNavItem,
    dropdownNavItem,
    singletonNavItem,
    footerNavItem,
    footerNav,
    socialMediaItem,
    mainImage,
    portableText,
    company,
    socialMedia,
    companyWebsite,
    benefit,
    emailListCta,
    directoryGrid,
    featuredTeams,
    benefitList,
    contactForm,
    formField,
  ]),
});
