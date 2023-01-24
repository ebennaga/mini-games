import { Grid, Box, Typography, List, ListItem, ButtonBase } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const yearsArray = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    let startYear = 1960;
    while (startYear <= currentYear) {
        // eslint-disable-next-line no-plusplus
        years.push(startYear++);
    }
    return years;
};

interface IAgeConfirmation {
    form: any;
    nameDate: string;
    nameMonth: string;
    nameYear: string;
}

const AgeConfirmation: React.FC<IAgeConfirmation> = ({ form, nameDate, nameMonth, nameYear }) => {
    const dataDate = [
        { month: 'January', noMonth: 1, total: 31 },
        { month: 'February', noMonth: 2, total: form.watch(nameYear) % 4 === 0 ? 29 : 28 },
        { month: 'March', noMonth: 3, total: 31 },
        { month: 'April', noMonth: 4, total: 30 },
        { month: 'May', noMonth: 5, total: 31 },
        { month: 'June', noMonth: 6, total: 30 },
        { month: 'July', noMonth: 7, total: 31 },
        { month: 'August', noMonth: 8, total: 31 },
        { month: 'September', noMonth: 9, total: 30 },
        { month: 'October', noMonth: 10, total: 31 },
        { month: 'November', noMonth: 11, total: 30 },
        { month: 'December', noMonth: 12, total: 31 }
    ];
    const [currenDate, setCurrentDate] = useState<any>({});
    const [dateConditional, setDateConditional] = useState<any>({ isList: false, value: form.watch(nameDate) });
    const [monthConditional, setMonthConditional] = useState<any>({ isList: false, value: form.watch(nameMonth) });
    const [yearConditional, setYearConditional] = useState<any>({ isList: false, value: form.watch(nameYear) });

    useEffect(() => {
        const result: any = dataDate.filter(
            (item: any) => item.noMonth === Number(form.watch(nameMonth)) || item.month === form.watch(nameMonth)
        );

        setCurrentDate(result[0]);
        setMonthConditional({ isList: monthConditional.isList, value: result[0]?.month });
        if (form.watch(nameMonth) === 'February' && Number(form.watch(nameDate)) > dataDate[1].total) {
            form.setValue(nameDate, dataDate[1].total);
            setDateConditional({ isList: dateConditional.isList, value: dataDate[1].total });
        }
    }, [form.watch(nameMonth)]);

    const handleSelect = (value: any, setState: any, name: string) => {
        setState({ isList: false, value });
        form.setValue(name, value);
    };

    return (
        <Grid container spacing={1} sx={{ display: 'flex' }}>
            <Grid item xs position='relative'>
                <Box
                    onClick={() => setDateConditional({ isList: !dateConditional.isList, value: form.watch(nameDate) })}
                    sx={{ background: '#F4F1FF', borderRadius: '12px', textAlign: 'left', padding: '5px 10px' }}
                >
                    <Typography component='span' fontSize='12px' fontWeight={600} sx={{ color: '#949494' }}>
                        Date
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#A54CE5' }}>
                            {dateConditional.value}
                        </Typography>
                        <KeyboardArrowDownIcon
                            sx={{ color: '#A54CE5', transform: dateConditional.isList ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                    </Box>
                </Box>
                {dateConditional.isList && (
                    <List
                        sx={{
                            height: '100px',
                            width: '90%',
                            overflow: 'auto',
                            position: 'absolute',
                            zIndex: 19,
                            background: '#fff',
                            borderBottomRightRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            padding: 0,
                            '::-webkit-scrollbar': {
                                width: '5px'
                            }
                        }}
                    >
                        {currenDate?.total &&
                            [...Array(currenDate.total)].map((_item: any, index: number) => {
                                const value = index + 1;
                                return (
                                    <ListItem key={index} sx={{ p: 0, ':hover': { background: '#f4f1ff' } }}>
                                        <ButtonBase
                                            onClick={() => handleSelect(value, setDateConditional, nameDate)}
                                            sx={{ width: '100%', height: '100%', padding: '5px 0' }}
                                        >
                                            <Typography component='span' fontSize='14px' fontWeight={600} sx={{ color: '#A54CE5' }}>
                                                {value}
                                            </Typography>
                                        </ButtonBase>
                                    </ListItem>
                                );
                            })}
                    </List>
                )}
            </Grid>
            <Grid item xs={5} position='relative'>
                <Box
                    onClick={() => setMonthConditional({ isList: !monthConditional.isList, value: monthConditional.value })}
                    sx={{ background: '#F4F1FF', borderRadius: '12px', textAlign: 'left', padding: '5px 10px' }}
                >
                    <Typography component='span' fontSize='12px' fontWeight={600} sx={{ color: '#949494' }}>
                        Month
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography component='span' fontWeight={700} sx={{ color: '#A54CE5', fontSize: { xs: '12px', ms: '14px' } }}>
                            {monthConditional.value}
                        </Typography>
                        <KeyboardArrowDownIcon
                            sx={{ color: '#A54CE5', transform: monthConditional.isList ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                    </Box>
                </Box>
                {monthConditional.isList && (
                    <List
                        sx={{
                            height: '100px',
                            width: '90%',
                            overflow: 'auto',
                            position: 'absolute',
                            zIndex: 19,
                            background: '#fff',
                            borderBottomRightRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            padding: 0,
                            '::-webkit-scrollbar': {
                                width: '5px'
                            }
                        }}
                    >
                        {dataDate.map((item: any) => {
                            return (
                                <ListItem key={item.month} sx={{ p: 0, ':hover': { background: '#f4f1ff' } }}>
                                    <ButtonBase
                                        onClick={() => handleSelect(item.month, setMonthConditional, nameMonth)}
                                        sx={{ width: '100%', height: '100%', padding: '5px 0' }}
                                    >
                                        <Typography component='span' fontSize='14px' fontWeight={600} sx={{ color: '#A54CE5' }}>
                                            {item.month}
                                        </Typography>
                                    </ButtonBase>
                                </ListItem>
                            );
                        })}
                    </List>
                )}
            </Grid>
            <Grid item xs position='relative'>
                <Box
                    onClick={() => setYearConditional({ isList: !yearConditional.isList, value: yearConditional.value })}
                    sx={{ background: '#F4F1FF', borderRadius: '12px', textAlign: 'left', padding: '5px 10px' }}
                >
                    <Typography component='span' fontSize='12px' fontWeight={600} sx={{ color: '#949494' }}>
                        Year
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#A54CE5' }}>
                            {form.watch(nameYear)}
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ color: '#A54CE5' }} />
                    </Box>
                </Box>
                {yearConditional.isList && (
                    <List
                        sx={{
                            height: '100px',
                            width: '90%',
                            overflow: 'auto',
                            position: 'absolute',
                            zIndex: 19,
                            background: '#fff',
                            borderBottomRightRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            padding: 0,
                            '::-webkit-scrollbar': {
                                width: '5px'
                            }
                        }}
                    >
                        {yearsArray().map((item: any) => {
                            return (
                                <ListItem key={item} sx={{ p: 0, ':hover': { background: '#f4f1ff' } }}>
                                    <ButtonBase
                                        onClick={() => handleSelect(item, setYearConditional, nameYear)}
                                        sx={{ width: '100%', height: '100%', padding: '5px 0' }}
                                    >
                                        <Typography component='span' fontSize='14px' fontWeight={600} sx={{ color: '#A54CE5' }}>
                                            {item}
                                        </Typography>
                                    </ButtonBase>
                                </ListItem>
                            );
                        })}
                    </List>
                )}
            </Grid>
        </Grid>
    );
};

export default AgeConfirmation;
