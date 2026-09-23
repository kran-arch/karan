import { Box, Button, Container, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import { colors } from '../theme'
import content from '../data/content'

export default function LabPreview() {
  return (
    <Box id="lab" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ borderTop: `1px solid ${colors.lightestNavy}`, pt: 4 }}>
          <Typography sx={{ color: colors.green, fontFamily: '"IBM Plex Mono", monospace', fontSize: '.75rem', mb: 1 }}>
            {content.lab.eyebrow}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} gap={3}>
            <Box>
              <Typography component="h2" sx={{ color: colors.white, fontSize: { xs: '1.7rem', md: '2.2rem' }, fontWeight: 700, mb: 1 }}>
                <Box component="span" aria-hidden="true" sx={{ color: colors.green, fontWeight: 800, mr: 1.25 }}>/</Box>
                {content.lab.title}
              </Typography>
              <Typography sx={{ color: colors.slate, maxWidth: 620, lineHeight: 1.7 }}>
                {content.lab.description}
              </Typography>
            </Box>
            <Button component={Link} to="/lab" endIcon={<ArrowForwardIcon />} variant="outlined" sx={{ alignSelf: { xs: 'flex-start', sm: 'center' }, color: colors.green, borderColor: colors.green, whiteSpace: 'nowrap' }}>
              Open the lab
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
