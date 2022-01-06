import { Typography, Container, Box } from "@material-ui/core";
import CustomizedAccordions from "../components/FaQAccordians";

const questionsAnswers = [
  {
    question: "Why do I need to be referenced?",
    answer:
      "The landlord needs to be sure that that their tenant won’t have any problems paying the rent on a monthly basis and that the tenant will take good care of their property.",
  },
  {
    question: "What does referencing involve?",
    answer:
      "Referencing is nothing to worry about. Tenants applying to rent need to give details of their employer and income, their previous address, and some bank account details. These will be checked to ensure they are able to commit to monthly rental payments.",
  },
  {
    question: "What if there are problems with my reference?",
    answer:
      "In some circumstances, a tenant may not be approved immediately via referencing. Obvious examples are students without a regular income, or someone leaving their family home for the first time with no renting history. This is not uncommon, and there are still options for tenants in this position. With the Landlords agreement, they could pay the rent for the full term up front, or seek out a guarantor.",
  },
  {
    question: "Do I need to show ID?",
    answer:
      "As part of the referencing process and in order to satisfy Right to Rent legislation we will need to check certain ID and confirm a tenant is who they say they are. We will require a proof of residency (such as a recent utility or council tax bill) and proof of ID (passport and driving licence) for all individual proposed tenants.",
  },
  {
    question: "What is a guarantor?",
    answer:
      "If a tenant is not fully approved by the referencing process, they can ask a guarantor to support them as long as the landlord agrees. A guarantor (usually a parent or guardian) will agree to take responsibility for the rent if the tenant fails to pay. Guarantors are required to pay any rent arrears (if the tenant does not pay) and for any damages costing more than the deposit.",
  },
  {
    question: "What does a guarantor need to do?",
    answer:
      "If a tenant is not fully approved by the referencing process, they can ask a guarantor to support them as long as the landlord agrees. A guarantor (usually a parent or guardian) will agree to take responsibility for the rent if the tenant fails to pay. Guarantors are required to pay any rent arrears (if the tenant does not pay) and for any damages costing more than the deposit.",
  },
  {
    question: "Why does my guarantor have to guarantee all tenants?",
    answer:
      "In the case of a house-share, the tenancy agreement makes all tenants jointly responsible for all rents and responsibilities. There is no individual share of the rent written into the agreement. The guarantor therefore has the same responsibility.",
  },
  {
    question: "Why do I have to pay a deposit?",
    answer:
      "The landlord trusts the tenant to keep the property in a good condition and in good order. The deposit is held to ensure that any damages (over and above fair wear and tear) can be corrected at the end of the tenancy.",
  },
  {
    question:
      "What will happen to my deposit & how much deposit I need to pay?",
    answer:
      "Landlords and letting agents are required to register your deposit with an approved Tenancy Deposit Scheme. You will receive details of the scheme, explaining where your deposit is held. A maximum 6 weeks rent deposit required.",
  },
  {
    question: "What does a Tenancy Deposit Scheme do?",
    answer:
      "A Tenancy Deposit Scheme like My Deposits will protect the money for you and can offer assistance should there be a dispute about the deposit at the end of the tenancy.",
  },
  {
    question: "What is a tenancy agreement?",
    answer:
      "A tenancy agreement is a contract signed by both the tenant and the landlord. It outlines all the rules to which both parties must comply",
  },
  {
    question: "What is an inspection?",
    answer:
      "Your landlord or letting agent will regularly schedule visits to the property. They want to make sure that the property is being looked after and maintained in a good condition, and they’ll be looking for any maintenance issues.",
  },
  {
    question: "Who is responsible for repairs?",
    answer:
      "The landlord is responsible for maintaining the property in a good state of repair. They will either take care of this directly, or do so via a letting agent – make sure you know who to go to when there’s a fault at the beginning of the tenancy. If you do damage to the property you are expected to cover the cost of putting this right.",
  },
  {
    question: "Can I decorate or make changes to the property?",
    answer:
      "In most cases, a tenant can only decorate or make changes to the property with the express permission of the landlord. We recommend receiving this permission in writing.",
  },
  {
    question: "What if I accidentally cause damage to the property?",
    answer:
      "Don’t worry – accidents happen. Tell whoever is responsible for the property maintenance (either the landlord or letting agent) as soon as possible. You will be expected to cover the cost of putting it right. Don’t try to ignore or hide damage because it could get worse, and it will only come out of your deposit at the end of the tenancy.",
  },
  {
    question:
      "What if the landlord isn't keeping to their side of the agreement?",
    answer:
      "If a tenant believes the landlord is not keeping to their side of the agreement – for instance, not maintaining the property in a fit state of repair – then the first thing the tenant should do is speak to their letting agent. The letting agent has a duty of care to the tenant, and may be able to help to resolve issues. Alternatively, a tenant can find independent advice from The Citizens Advice Bureau.",
  },
  {
    question: "What if I want to end the tenancy?",
    answer:
      "If you are tied into a fixed term contract, you will be liable for the rent until the fixed term is finished. If you are no longer in a fixed term contract (ie. a rolling contract) your tenancy agreement will define the notice you need to give.",
  },
];
const Faq = () => {
  return (
    <Box
      style={{
        paddingBottom: "10vh",
        marginBottom: "10vh",
      }}
      sx={{
        height: "93.36vh",
        background: "url(/background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        zIndex: 10,
      }}
    >
      <Container style={{ textAlign: "center", paddingTop: "3%" }}>
        <Typography variant="h3" style={{ paddingBottom: "1%" }}>
          FaQ page
        </Typography>
        <CustomizedAccordions data={questionsAnswers}></CustomizedAccordions>
      </Container>
    </Box>
  );
};
export default Faq;
