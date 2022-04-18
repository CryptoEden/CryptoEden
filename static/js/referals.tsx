/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardContent, Divider, FormControl, Grid, OutlinedInput, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { doc, getDoc} from "firebase/firestore";
import { db } from './firebase';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
interface Props{
    link: string;
}
export const Referals = ({link}:Props) => {
const {account} = useWeb3React<Web3Provider>();
const [referalCount, setReferralCount] = useState(0);
    useEffect(() => {
        const get = async () => {
            const docRef = doc(db,"referrals", account!);
            const query = await getDoc(docRef);
             if(query.data()){
                setReferralCount(query.data()!.referrals);
             }

        }

        if(link && account && link !== ""){
            get();
        }
        
    }, [link, account])
    return (
        <Card
          sx={{
            color: "rgb(23, 33, 94)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "rgb(0 0 0 / 59%) 6px 6px 20px 6px",
            borderRadius: "20px",
            background: "rgb(251, 241, 225)",
            marginBottom: "24px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Referrals
            </Typography>
            <Divider sx={{marginTop: "8px"}} />
            <Grid container sx={{marginTop: "10px", marginBottom: "10px"}} spacing={2}>
              <Grid item xs={9}>
                Your Referrals
              </Grid>
              <Grid sx={{ textAlign: "right" }} item xs={3}>
                {referalCount}
              </Grid>
            </Grid>
            <FormControl
              sx={{ width: "100%", mt: 2, mb: 2 }}
              variant="outlined"
            >
              <OutlinedInput value={link} />
            </FormControl>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "16px", textAlign: "center" }}
            >
              Earn 14% of the FTM used to launder money from anyone who uses
              your referral link.
            </Typography>
          </CardContent>
        </Card>

    )
}