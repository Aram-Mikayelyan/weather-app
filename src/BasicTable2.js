import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import './BasicTable.scss'

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});





export default function BasicTable2({ countryWeather, text }) {
    const classes = useStyles();
        return (
            <Container>
            <TableContainer className='result-table' component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> {text.slice(0, 1).toUpperCase() + text.slice(1)} ({countryWeather.description})</TableCell>
                            <TableCell align="right">Temperature</TableCell>
                            <TableCell align="right">Wind&nbsp;</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Today
                        </TableCell>
                            <TableCell align="right">{countryWeather.temperature.startsWith('+') ? countryWeather.temperature : '+' + countryWeather.temperature}</TableCell>
                            <TableCell align="right">{countryWeather.wind}</TableCell>
                        </TableRow>
                        {
                            countryWeather ?
                                countryWeather.forecast.map((day) => (
                                    <TableRow key={day.name}>
                                        <TableCell component="th" scope="row">
                                            Day {day.day}
                                        </TableCell>
                                        <TableCell align="right">{day.temperature.startsWith('+') ? day.temperature : '+' + day.temperature}</TableCell>
                                        <TableCell align="right">{day.wind}</TableCell>
                                    </TableRow>
                                ))
                                : null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
            
        )
    }
