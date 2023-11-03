import React from 'react';
import { Container, Paper, Typography, TextareaAutosize, Card, CardContent, Button} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';

function ProblemStatementView() {
  const problemStatementMarkdown = `
  ## Problem Statement

  Given an array of integers, find the sum of all positive integers.

  ### Input
  The input is an array of integers.

  ### Output
  Print the sum of all positive integers.

  ### Example
  **Input:**
  \`\`\`
  [2, -3, 5, 7, -1, 9]
  \`\`\`

  **Output:**
  \`\`\`
  23
  \`\`\`
  `;

  const { id } = useParams();

  const testCases = [
    { input: [2, -3, 5, 7, -1, 9], output: 23 },
    { input: [1, 2, 3, 4], output: 10 },
  ];

  return (
    <div>
    <div> { id } </div>
    <Container maxWidth="md">
      <Paper elevation={3}>
        <div style={{ padding: '16px' }}>
          <Typography variant="h4" gutterBottom>
            Problem Statement
          </Typography>
          <div>
            <ReactMarkdown components={{ code: SyntaxHighlighter }} children={problemStatementMarkdown} />
          </div>

          <Typography variant="h5" gutterBottom>
            Submit Your Solution
          </Typography>
          <TextareaAutosize
            rowsMin={4}
            placeholder="Enter your solution here"
            style={{ width: '100%', marginBottom: '16px' }}
          />
          <Button> Submit </Button>
        </div>
      </Paper>
    </Container>
    </div>
  );
}

export default ProblemStatementView;
