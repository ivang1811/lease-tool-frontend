import { Typography, Container } from "@material-ui/core";
import CustomizedAccordions from "../components/FaQAccordians";

const questionsAnswers = [
  { question: "How to do this", answer: "Lorem Ipsum" },
  { question: "How to do this", answer: "Lorem Ipsum" },
  { question: "How to do this", answer: "Lorem Ipsum" },
  { question: "How to do this", answer: "Lorem Ipsum" },
  { question: "How to do this", answer: "Lorem Ipsum" },
];
const Faq = () => {
  return (
    <Container style={{ textAlign: "center", paddingTop: "3%" }}>
      <Typography variant="h3" style={{ paddingBottom: "1%" }}>
        FaQ page
      </Typography>
      <CustomizedAccordions data={questionsAnswers}></CustomizedAccordions>
    </Container>
  );
};
export default Faq;
