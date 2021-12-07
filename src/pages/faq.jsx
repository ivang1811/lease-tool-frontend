import { Typography, Container, Box } from "@material-ui/core";
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
    <Box
      style={{ position: "absolute" }}
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
