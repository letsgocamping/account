if [ "$1" == "nocontainer" ]; then
  echo "Starting new container.."
else
  echo "Restarting container.."
  docker stop lgc-account && docker rm lgc-account
fi
docker build -t lgc-account . && docker run --name lgc-account -p 8081:8080 --network br0 --env-file .env -d lgc-account
