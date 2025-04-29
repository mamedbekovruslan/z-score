import React from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import ModeChart from "./components/ModeChart";

const App = () => {
  const today = new Date().toLocaleDateString("ru-RU");

  return (
    <Box p={4}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Z-Score
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Необходимо модифицировать пример
        <Link
          href="http://recharts.org/en-US/examples/SimpleLineChart"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          Recharts SimpleLineChart
        </Link>
        — раскрасить все участки графиков, на которых модуль z-score &gt; 1, в
        красный цвет. Цвет точек графика должен совпадать с цветом участка.
        <Link
          href="https://en.wikipedia.org/wiki/Standard_score"
          target="_blank"
          rel="noopener"
          sx={{ ml: 0.5 }}
        >
          Подробнее о Z-Score
        </Link>
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8} width="81%">
          <Paper elevation={3} sx={{ p: 2 }}>
            <ModeChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: "93%" }}>
            <Typography variant="h6" gutterBottom>
              Источники
            </Typography>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <Link
                  href="https://en.wikipedia.org/wiki/Standard_score"
                  target="_blank"
                  rel="noopener"
                >
                  Z-Score
                </Link>
              </li>
              <li>
                <Link
                  href="http://recharts.org/en-US/examples/SimpleLineChart"
                  target="_blank"
                  rel="noopener"
                >
                  Исходный Recharts
                </Link>
              </li>
            </ul>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Исполнитель
            </Typography>
            <Typography>Мамедбеков Руслан Айдынович</Typography>
            <Typography sx={{ mt: 1 }}>Телефон: +7 985 064 60 80</Typography>
            <Typography>Почта: mamedbekovruslan@yandex.ru</Typography>

            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              href="https://t.me/mamedbekovruslan"
              target="_blank"
              sx={{ mt: 2 }}
            >
              Telegram
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={6} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          {today}
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
