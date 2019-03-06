new Vue({
  el: '#vue-app',
  data: {
    // styles
    primaryColor: '#0f93ce',
    secondaryColor: '#503291',
    linebreak: '<br>',
    doubleLinebreak: '<br><br>',
    // data
    title: 'Immuno-Oncology Literature Alert',
    date: 'February 16-28, 2019',
    descriptions: [
      'The Immuno-Oncology Literature Alert brings value by keeping readers abreast of the published immuno-oncology landscape in a comprehensive and concise fashion.',
      'Publications are selected by performing an online-first journal scan of 12 top-tier journals*. Highlights are selected based on the strategic themes of the Merck immuno-oncology program.',
      'Note that the Literature Alerts are strictly for your information and internal use only. Please do not use or distribute externally.',
      'Please refer to the <a href="https://evarooms.merckgroup.com/organization/gma/global-medical-excellence/gmc-home" target="_blank">GMC EVA page</a> to manage subscriptions to TA-specific services, such as Literature Alerts, Publication News, or Quarterly Med Info Insights Reports.',
    ],
    highlights: [
      'Nivolumab plus ipilimumab was an effective 1L treatment of advanced/metastatic NSCLC and high TMB was associated with improved ORR and prolonged PFS, regardless of tumor PD-L1 expression (Ready <em>et al</em>)'
    ],
    publications: [
      {
        id: 0,
        title:
          'First-line nivolumab plus ipilimumab in advanced non–small-cell lung cancer (CheckMate 568): outcomes by programmed death ligand 1 and tumor mutational burden as biomarkers',
        author: 'Ready N, Hellman MD, Awad MM, <em>et al</em>.',
        journal: 'J Clin Oncol',
        link:
          'http://ascopubs.org/doi/full/10.1200/JCO.18.01042',
        keyMessages: [
          'In the phase 2 CheckMate 568 trial of 288 patients with untreated, recurrent stage IIIB/IV NSCLC, ORR was 30% overall and 41% and 15% in patients with ≥1% and <1% tumor PD-L1 expression, respectively. Regardless of PD-L1 expression, ORR was higher in patients with TMB of ≥10 mut/Mb (≥1%/<1% tumor PD-L1 expression, 48%/47%) vs TMB of <10 mut/Mb (≥1%/<1% tumor PD-L1 expression, 18%/5%), and PFS was longer in patients with TMB of ≥10 mut/Mb vs <10 mut/Mb (median, 7.1 vs 2.6 months)',
        ],
      }, // /id: 0
      {
        id: 1,
        title:
          'B7-H3 expression in Merkel cell carcinoma-associated endothelial cells correlates with locally aggressive primary tumor features and increased vascular density',
        author: 'Aung PP, Parra ER, Barua S, <em>et al</em>.',
        journal: 'Clin Cancer Res',
        link:
          'http://clincancerres.aacrjournals.org/content/early/2019/02/26/1078-0432.CCR-18-2355',
        keyMessages: [
          'Primary and metastatic MCC exhibit a dynamic range of co-localized CD31 and B7-H3 expression; increasing co-localized expression was significantly associated with increased tumor size (p=0.0060), greater depth of invasion (p=0.0110), presence of lymphovascular invasion (p=0.0453), and invasion beyond skin (p=0.0428) in primary MCC. Consistent with these findings, increasing co-localized expression of B7-H3 and CD31 correlated with increasing vascular density in primary MCC, but not metastatic MCC',
        ],
      },
      {
        id: 2,
        title:
          'Assessment of blood tumor mutational burden as a potential biomarker for immunotherapy in patients with non–small cell lung cancer with use of a next-generation sequencing cancer gene panel',
        author: 'Wang Z, Duan J, Cai S, <em>et al.</em>',
        journal: 'JAMA Oncol',
        link:
          'https://jamanetwork.com/journals/jamaoncology/fullarticle/2726029',
        keyMessages: [
          'In this study of 2 independent cohorts of patients with NSCLC, the correlation between blood TMB estimated by a 150-gene panel and tissue TMB measured by WES was evaluated and validated in matched blood and tissue samples from 48 and 50 patients with advanced NSCLC, respectively. Blood TMB estimated by the 150-gene panel correlated with the matched tissue TMB (Spearman correlation = 0.62). In patients who received anti–PD-1/L1 treatment, high blood TMB was associated with superior PFS (HR, 0.39; P = .01) and ORR (39.3% vs 9.1%; P = .02)',
        ],
      }
    ], // /publications
    footnote:
      '*The following journals were included: <em>Ann Oncol, Blood, Cancer Discov, Clin Cancer Res, J Clin Oncol, JAMA, JAMA Oncol, Lancet, Lancet Oncol, Nat Med, New Engl J Med, Sci Transl Med</em>',
  }, // /data
  methods: {}, // /methods
});
