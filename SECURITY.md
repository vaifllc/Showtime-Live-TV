# Security Guidelines

## Firebase Configuration

### Environment Variables

This project uses environment variables to manage Firebase configuration securely. Follow these steps:

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your actual Firebase configuration values in `.env`:**
   ```
   VUE_APP_FIREBASE_API_KEY=your-actual-api-key
   VUE_APP_FIREBASE_AUTH_DOMAIN=showtime-live-tv.firebaseapp.com
   VUE_APP_FIREBASE_PROJECT_ID=showtime-live-tv
   VUE_APP_FIREBASE_STORAGE_BUCKET=showtime-live-tv.firebasestorage.app
   VUE_APP_FIREBASE_MESSAGING_SENDER_ID=693734156945
   VUE_APP_FIREBASE_APP_ID=1:693734156945:web:24311e81a5d8ee06056d30
   VUE_APP_FIREBASE_MEASUREMENT_ID=G-KHYZNZW65N
   ```

### Service Account Key (Admin SDK)

For Firebase Admin SDK operations:

1. **Download your service account key** from Firebase Console:
   - Go to Project Settings → Service Accounts
   - Click "Generate new private key"
   - Save the file as `src/firebase/serviceAccountKey.json`

2. **Never commit this file to version control!** It's already in `.gitignore`

3. **For production deployments**, use environment variables or secure secret management instead of JSON files.

## Important Security Notes

⚠️ **DO NOT:**
- Commit service account keys to version control
- Share API keys in public repositories
- Use production credentials in development

✅ **DO:**
- Use environment variables for sensitive configuration
- Use different Firebase projects for development/staging/production
- Regularly rotate API keys and service account keys
- Follow the principle of least privilege for service accounts

## Production Deployment

For production deployments, consider using:
- Firebase Hosting environment variables
- Cloud provider secret managers (AWS Secrets Manager, Google Secret Manager, etc.)
- Container environment variables
- CI/CD pipeline secret management

## Getting Help

If you accidentally commit sensitive information:
1. Immediately revoke the exposed credentials in Firebase Console
2. Generate new credentials
3. Clean the git history using `git filter-branch` or `git filter-repo`
4. Force push the cleaned history (be careful with shared repositories)