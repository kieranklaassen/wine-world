import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import AddIcon from '@material-ui/icons/Add'

import AddressBox from './../../components/AddressBox/AddressBox'
import MultiImageBox from './../../components/MultiImageBox/MultiImageBox'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Wine Shoppe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const images = [
  'https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406266/ulmdda3oesjrkrtdckse.jpg',
  'https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406284/ewgicilm9igwwf2jf08v.jpg',
  'https://res.cloudinary.com/dhcx3vzmg/image/upload/v1601406286/eu3srvlbpxj95ynvsjjv.jpg'
]

export default function Album() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ShoppingCartIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Wine Shoppe
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="flex-start">
              <Grid container item xs={12} lg={4}>
                <MultiImageBox images={images} />
              </Grid>
              <Grid container item xs={12} lg={8}>
                <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
                  Lodi Sauvignon Blanc
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                  Not a typo or a mis-print... we actually made a Sauvignon Blanc. Citrus and green
                  apple dominate the nose - with bright acidity and a touch of richness helping to
                  keep things fresh and exciting. The finish offers up that subtle "grassy-ness"
                  that you'd expect.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <AddressBox label="Enter your address to buy" />
                    </Grid>
                    <Grid item>
                      {/* FIXME: enabke button when AddressBox is filled in */}
                      <Button variant="contained" color="primary" startIcon={<AddIcon />} disabled>
                        Add to cart
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        learn about the winery
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
