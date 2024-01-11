import BaseProjectPage from "../../components/baseProjectPage";
function Keystone() {
  return (
    <BaseProjectPage
      title={"Keystone Condominiums"}
      description={`For this project I created a luxury condominium called Keystone that is projected to be in Tampa Florida. 
      The guide was to create a branding logo that can be displayed on multiple items.`}
      optionalExtraDescription={
        <p className="mb-4 text-xs font-normal text-center text-black font-manjari">
          <span className="font-bold">Brand Strategy:</span> I first wanted to
          start off by choosing a really strong font that could stand alone as a
          brand mark and also apart of the whole name. I then had to identify
          what brand colors I wanted to go with. Since the company wants to
          showcase a luxurious look and feel I went with 3 shades of purple.
          From there I wanted to design a logo mark that represents the company.
          So, I decided to take the K in Keystone and incorporate a sharp condo
          look and feel. My goal for this branding project was to give this
          company a whole new look and feel and the right start to attracting
          new clients."
        </p>
      }
    >
      <></>
    </BaseProjectPage>
  );
}

export default Keystone;
