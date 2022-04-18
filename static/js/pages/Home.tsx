/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { useWeb3React } from "@web3-react/core";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  OutlinedInput,
  FormControl,
  InputAdornment,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";

import abi from "../abi/abi.json";
import { MetamaskConnector } from "../connectors/injected-connector";
import { walletConnect } from "../connectors/wallect-connect";
import meta from "../assets/meta.svg";
import wc from "../assets/walletConnect.svg";
import logo from "../assets/logo_new.png";
import img1 from "../assets/link1.png";
import img2 from "../assets/link2.png";
import img3 from "../assets/docs.png";
import img5 from "../assets/audit.png";
import img4 from "../assets/link4.png";
import { Contract } from "@ethersproject/contracts";
import { contractAddress, rpc } from "../connectors/address";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { Theme } from "@mui/system";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useEffect, useState } from "react";
import { Referals } from "../referals";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

interface State {
  amount: number;
  link?: string;
  refAddress: string | null;
  dlgOpen: boolean;
  balWallet: number;
  balContract: number;
  miners: number;
}

export const Home = () => {
  const classes = useStyles();
  let [searchParams, setSearchParams] = useSearchParams();
  const [wrongNetwork, setWrongNetwork] = useState(false);

  const [values, setValues] = React.useState<State>({
    amount: 0,
    dlgOpen: false,
    refAddress: searchParams.get("ref"),
    balWallet: 0,
    balContract: 0,
    miners: 0,
  });

  const [beanRewards, setRewards] = React.useState<number>(0);
  const { error, account, activate, deactivate, library, chainId } =
    useWeb3React<Web3Provider>();

  React.useEffect(() => {
    if (window.ethereum) {
      MetamaskConnector.isAuthorized().then((isAuth: boolean) => {
        activate(MetamaskConnector);
      });
    }
  }, []);
  const handleMetaConnect = () => {
    if (window.ethereum) {
      if (account) {
        deactivate();
      }
      activate(MetamaskConnector);
      setValues({
        ...values,
        dlgOpen: !values.dlgOpen,
      });
    } else {
      toast.error("No metatmask wallet detected.");
    }
  };

  const handleWalletConnect = () => {
    if (account) {
      deactivate();
    }
    activate(walletConnect);
    setValues({
      ...values,
      dlgOpen: !values.dlgOpen,
    });
  };

  const handleLaunderMoney = async () => {
    if (account && library) {
      try {
        const signer = await library.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        let overRides = {
          value: parseUnits(values.amount.toString(), "ether"),
        };

        const ref = values.refAddress ? values.refAddress : account;
        const txResult = await contract.buyEggs(ref, overRides);
        await txResult.wait();
        if (values.refAddress) {
          if (values.refAddress !== account!) {
            const queryRef = doc(db, "referrals", values.refAddress!);
            const docref = collection(db, "referrals");
            const query = await getDoc(queryRef);
            if (query.data()) {
              await setDoc(doc(docref, values.refAddress), {
                referrals: query.data()!.referrals + 1,
              });
              console.log("Step 1")
            } else {
              await setDoc(doc(docref, values.refAddress), {
                referrals: 1,
              });
              console.log("step 2");
            }
          }
        }
        toast.success(`Milking Completed!`);
      } catch (error) {
        toast.error("Transaction Error!");
      }
    }
  };

  const handleReLaunder = async () => {
    if (account && library) {
      try {
        const signer = await library!.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        const txResult = await contract.hatchEggs(
          "0x0000000000000000000000000000000000000000"
        );
        await txResult.wait();
        toast.success("Re Milking Successful!");
      } catch (error) {
        toast.error("Transaction Error!");
      }
    }
  };

  const handleWithdraw = async () => {
    if (account && library) {
      try {
        const signer = await library!.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        const txResult = await contract.sellEggs();
        await txResult.wait();
        toast.success("Re Milking Successful!");
      } catch (error) {
        toast.error("Transaction Error!");
      }
    }
  };
  const handleOpenDlg = () => {
    if (account) {
      deactivate();
    } else {
      setValues({
        ...values,
        dlgOpen: !values.dlgOpen,
      });
    }
  };

  React.useEffect(() => {
    const getBalances = async () => {
      try {
        const bal = await library!.getBalance(account!);
        const conBal = await library!.getBalance(contractAddress!);
        const signer = await library!.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        const myMiners = await contract.getMyMiners(account);
        setValues({
          ...values,
          balWallet: Number(Number(formatUnits(bal, "ether")).toFixed(4)),
          balContract: Number(Number(formatUnits(conBal, "ether")).toFixed(4)),
          miners: Number(formatUnits(myMiners, 0)),
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (account && library) {
      getBalances();
    }
  }, [account, library]);

  React.useEffect(() => {
    const getRewards = async () => {
      try {
        const provider = new JsonRpcProvider(rpc);
        const contract = new Contract(contractAddress, abi, provider);
        const myMiners = await contract.getMyMiners(account);
        let rewards;
        if (Number(formatUnits(myMiners, "ether")) > 0) {
          rewards = await contract.beanRewards(account);
          setRewards(Number(Number(formatUnits(rewards, "ether")).toFixed(4)));
        }
      } catch (error) {
        setRewards(0);
      }
    };
    if (account && library) {
      getRewards();
    }
  }, [account, library]);
  React.useEffect(() => {
    if (error) {
      if (window.ethereum.chainId !== "0xfa") {
        toast.error("Wrong Network!");
        setWrongNetwork(true);
      }
    }
  }, [error]);

  React.useEffect(() => {
    if (account) {
      setValues({
        ...values,
        link: `https://cowmilking.netlify.app/?ref=${account}`,
      });
    }
  }, [account]);

  useEffect(() => {
    if (chainId === 250) {
      setWrongNetwork(false);
    }
  }, [chainId]);
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const isDisabled = (): boolean => {
    if (account) {
      return values.amount > 0 ? false : true;
    } else {
      return true;
    }
  };

  const handleNetworkSwitch = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xfa",
              chainName: "Fantom Opera Mainnet",
              rpcUrls: ["https://rpcapi.fantom.network/"],
              nativeCurrency: {
                name: "Fantom",
                symbol: "FTM",
                decimal: 18,
              },
              blockExplorerUrls: ["https://ftmscan.com/"],
            },
          ],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.root}>
      <Box
        sx={{
          p: "48px 16px",
          maxWidth: "400px",
          ml: "auto",
          mr: "auto",
        }}
      >
        <ToastContainer closeOnClick position="bottom-left" />
        <Dialog
          open={values.dlgOpen}
          onClose={() => setValues({ ...values, dlgOpen: false })}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
            },
          }}
        >
          <DialogContent
            sx={{
              minWidth: "400px",
              minHeight: "400px",
            }}
          >
            <Card
              sx={{
                minHeight: "150px",
                textAlign: "center",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={handleMetaConnect}
            >
              <CardContent>
                <img src={meta} className={classes.svgicon} alt="" />
                <Typography variant="h5" sx={{ fontWeight: "bold", pt: 2 }}>
                  Metamask
                </Typography>
                <Typography variant="h6" sx={{ pt: 1, color: "#b5b5b5" }}>
                  Connect to your metamask wallet
                </Typography>
              </CardContent>
            </Card>
            <Divider />
            <Card
              sx={{
                minHeight: "150px",
                textAlign: "center",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={handleWalletConnect}
            >
              <CardContent>
                <img src={wc} className={classes.svgicon} alt="" />
                <Typography variant="h5" sx={{ fontWeight: "bold", pt: 2 }}>
                  WallectConnect
                </Typography>
                <Typography variant="h6" sx={{ pt: 1, color: "#b5b5b5" }}>
                  Scan with WalletConnect to connect
                </Typography>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
        <div className={classes.box}>
          <div className={classes.logobox}>
            <img src={logo} className={classes.logo} alt="" />
          </div>
          {!wrongNetwork && (
            <Button
              className={classes.btn}
              sx={{
                position: {
                  xs: "inherit",
                  md: "fixed",
                },
                width: {
                  xs: "100%",
                  md: "inherit",
                },
                right: {
                  md: "48px",
                },
                top: {
                  md: "48px",
                },
                mb: {
                  xs: 3,
                  md: "inherit",
                },
              }}
              onClick={handleOpenDlg}
            >
              {account !== undefined ? `Disconnect` : `Connect`}
            </Button>
          )}
          {wrongNetwork && (
            <Button
              className={classes.btn}
              sx={{
                position: {
                  xs: "inherit",
                  md: "fixed",
                },
                width: {
                  xs: "100%",
                  md: "inherit",
                },
                right: {
                  md: "48px",
                },
                top: {
                  md: "48px",
                },
                mb: {
                  xs: 3,
                  md: "inherit",
                },
              }}
              onClick={handleNetworkSwitch}
            >
              Switch Network
            </Button>
          )}
          <Typography
            sx={{ textAlign: "center", letterSpacing: "0.05em" }}
            variant="h6"
          >
            The FTM Reward Pool with the tastiest daily return and lowest dev
            fee
          </Typography>
        </div>
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
            <Grid container spacing={2}>
              <Grid
                sx={{ fontSize: 20, color: "GrayText", marginTop: "15px" }}
                item
                xs={6}
              >
                Contract
              </Grid>
              <Grid
                sx={{ textAlign: "right", marginTop: "15px", fontSize: 20 }}
                item
                xs={6}
              >
                {values.balContract} FTM
              </Grid>
              <Grid sx={{ fontSize: 20, color: "GrayText" }} item xs={6}>
                Wallet
              </Grid>
              <Grid sx={{ textAlign: "right", fontSize: 20 }} item xs={6}>
                {values.balWallet} FTM
              </Grid>
              <Grid sx={{ fontSize: 20, color: "GrayText" }} item xs={6}>
                Your thieves
              </Grid>
              <Grid sx={{ textAlign: "right", fontSize: 20 }} item xs={6}>
                {values.miners} THIEVES
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 4,
                pb: 4,
                "& .MuiFormControl-root": {
                  width: "100%",
                },
              }}
            >
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <OutlinedInput
                  type="number"
                  id="outlined-adornment-amount"
                  value={values.amount}
                  onChange={handleChange("amount")}
                  endAdornment={
                    <InputAdornment position="end">FTM</InputAdornment>
                  }
                  aria-describedby="outlined-amount-helper-text"
                  inputProps={{
                    "aria-label": "amount",
                  }}
                />
              </FormControl>
              <Button
                sx={{ width: "100%", mt: 3, mb: 3 }}
                className={classes.btn}
                onClick={handleLaunderMoney}
                disabled={isDisabled()}
              >
                Buy Cows
              </Button>
              <Divider />
              <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Your rewards
                  </Typography>
                </Grid>
                <Grid sx={{ textAlign: "right" }} item xs={6}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {beanRewards} FTM
                  </Typography>
                </Grid>
              </Grid>
              <div style={{ display: "flex" }}>
                <Button
                  onClick={handleReLaunder}
                  disabled={account ? false : true}
                  sx={{ width: "50%", m: 1 }}
                  className={classes.btn}
                >
                  RE-HIRE
                </Button>
                <Button
                  onClick={handleWithdraw}
                  disabled={account ? false : true}
                  sx={{ width: "50%", m: 1 }}
                  className={classes.btn}
                >
                  MILK
                </Button>
              </div>
            </Box>
          </CardContent>
        </Card>
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
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Milking Facts
            </Typography>
            <Divider sx={{ mt: 1, mb: 3 }} />
            <Grid container spacing={2}>
              <Grid item xs={9}>
                Daily Return
              </Grid>
              <Grid sx={{ textAlign: "right" }} item xs={3}>
                8%
              </Grid>
              <Grid item xs={9}>
                APR
              </Grid>
              <Grid sx={{ textAlign: "right" }} item xs={3}>
                2,920%
              </Grid>
              <Grid item xs={9}>
                Dev Fee + Marketing Fee
              </Grid>
              <Grid sx={{ textAlign: "right" }} item xs={3}>
                6%
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Referals link={values.link!} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
          }}
        >
          <IconButton
            onClick={() =>
              window.open(
                `https://ftmscan.com/address/${contractAddress}`,
                "_blank"
              )
            }
          >
            <img src={img1} className={classes.linkimg} alt="" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://t.me/milkingcows", "_blank")
            }
          >
            <img src={img2} className={classes.linkimg} alt="" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://discord.gg/YM7D3qGKx4", "_blank")
            }
          >
            <img src={img4} className={classes.linkimg2} alt="" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://medium.com/",
                "_blank"
              )
            }
          >
            <img src={img3} className={classes.linkimg2} alt="" />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://cdn.discordapp.com/attachments/958386777545117696/961617828887285781/Money_Laundry_Audit.pdf",
                "_blank"
              )
            }
          >
            <img src={img5} className={classes.linkimg2} alt="" />
          </IconButton>
        </div>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "100vh",
      "& .MuiButton-root": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        lineHeight: "2",
        textTransform: "uppercase",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: "#1969fe",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "rgb(0 0 0 / 59%) 2px 2px 8px 2px",
        color: "rgb(23, 33, 94)",
        minWidth: "138px",
      },
    },
    box: {
      maxWidth: "400px",
      margin: "0 auto",
      marginBottom: "20px",
    },
    logobox: {
      textAlign: "center",
      paddingBottom: "24px",
      justifyContent: "center",
      display: "flex",
    },
    logo: {
      width: "360px",
      height: "70px",
    },
    linkimg: {
      width: "48px",
      height: "48px",
      borderRadius: "24px",
    },
    linkimg2: {
      width: "28px",
      height: "28px",
      borderRadius: "24px",
      backgroundColor: "#17215e",
      padding: 8,
    },
    svgicon: {
      height: "60px",
      width: "80px",
    },
    btn: {
      color: "white!important",
      fontSize: "16px!important",
      "&:hover": {
        backgroundColor: "navy!important",
      },
      "&:disabled": {
        backgroundColor: "gray!important",
      },
    },
  })
);
